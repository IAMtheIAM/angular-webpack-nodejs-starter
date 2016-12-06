# ASP.NET Framework starter project

### Features

* Works fully in Visual Studio 2015
* ASP.NET Framework 4.6
* Angular 2 (AOT & JIT Compilation)
* Webpack
* TypeScript
* SASS
* Microservices architecture
  * Identity server
  * Resource server(s)
  * Frontend server

### Please note

This web project is intended to be hosted in IIS.
Visit [the guide for publishing your website on a (local) IIS instance](https://docs.asp.net/en/latest/publishing/iis.html).


URL to Project mapping:
```
         starter.local -> Frontend.Webhost
identity.starter.local -> Api.Authentication
resource.starter.local -> Api.Resource
```

Hosts file configuration:
```
127.0.0.1   starter.local
127.0.0.1   identity.starter.local
127.0.0.1   resource.starter.local
```

After configuring the three server processes in IIS, you can simply go to [http://starter.local/](http://starter.local/) to visit your site. If you want to debug, simply run the project in debug mode in Visual Studio and the debugger would work as you expect it to.

You might have to change all the server projects to point to your local IIS instance, which you do (for each project) by:
* Right clicking the project in your solution
* -> Properties
* -> Web
* Change "IIS Express" to "Local IIS"
* Point the project URL to the URL you configured in IIS
   * For example: `http://identity.starter.local/` for the identity server
   
### Recommended Plugins

- [NPM Task Runner extension for VS2015](https://visualstudiogallery.msdn.microsoft.com/8f2f2cbc-4da5-43ba-9de2-c9d08ade4941)