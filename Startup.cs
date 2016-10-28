namespace Dotnet.Starter
{
    using Dotnet.Starter.Data;
    using Dotnet.Starter.Models;

    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;

    public class Startup
    {
        public static string Environment { get; private set; }

        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder =
                new ConfigurationBuilder().SetBasePath(env.ContentRootPath)
                    .AddJsonFile("appsettings.json", true, true)
                    .AddJsonFile($"appsettings.{env.EnvironmentName}.json", true);

            if (env.IsDevelopment()) builder.AddUserSecrets();

            builder.AddEnvironmentVariables();
            this.Configuration = builder.Build();

            Environment = env.EnvironmentName.ToLower();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(this.Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // Enable middleware to serve generated Swagger as a JSON endpoint
            app.UseSwagger();

            // Enable middleware to serve swagger-ui assets (HTML, JS, CSS etc.)
            app.UseSwaggerUi();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            // app.UseStaticFiles();
            app.UseStaticFiles(
                new StaticFileOptions
                    {
                        OnPrepareResponse = context =>
                            {
                                var headers = context.Context.Response.Headers;
                                string contentType = headers["Content-Type"];
                                if (contentType == "application/x-gzip")
                                {
                                    if (context.File.Name.EndsWith("js.gz")) contentType = "application/javascript";
                                    else if (context.File.Name.EndsWith("css.gz")) contentType = "text/css";
                                    headers.Add("Content-Encoding", "gzip");
                                    headers["Content-Type"] = contentType;
                                }
                            }
                    });

            app.UseIdentity();

            // Add external authentication middleware below. To configure them please see http://go.microsoft.com/fwlink/?LinkID=532715
            app.UseMvc(routes => { routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}"); });
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(
                options => options.UseSqlServer(this.Configuration.GetConnectionString("AtimIdentityConnection")));

            // add identity
            services.AddIdentity<ApplicationUser, IdentityRole>(
                options =>
                    {
                        options.Password.RequireDigit = false;
                        options.Password.RequiredLength = 2;
                        options.Password.RequireLowercase = false;
                        options.Password.RequireNonAlphanumeric = false;
                        options.Password.RequireUppercase = false;
                    }).AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();

            // Required to use the Options<T> pattern
            services.AddOptions();

            // Add settings from configuration
            services.Configure<ViolationMicroServiceConfiguration>(
                this.Configuration.GetSection("ViolationMicroServiceConfiguration"));
            services.Configure<SuscribersMicroServiceConfiguration>(
                this.Configuration.GetSection("SuscribersMicroServiceConfiguration"));

            // swagger
            services.AddSwaggerGen();

            services.AddMvc();
        }
    }
}