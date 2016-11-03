# Tips on using this starter project

### Using Visual Studio

This project is configured to integrate with the Visual Studio build process.
You can simply run as "dev" and "production". Production uses AOT compilation. 

Development uses JIT compilation with Hot Module Replacement to make your development process a bit more enjoyable.
To use the development mode, **before starting**, run `npm run devserver:jit` to host the development server.
Now, start IIS Express (Dev) in Visual Studio and enjoy the magic!

### Changing the default namespace

If you want to change the default `Dotnet.Starter` namespace to your own, simply go to any file such as `Program.cs` and highlight the `Dotnet.Starter` text.
Using `ctrl+f` do a replace all on this, and simply fill in the desired name. Rebuild the solution and fix any missing `using` statements.