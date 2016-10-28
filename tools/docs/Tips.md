# Tips on getting started with this starter

### Using Visual Studio

This project is configured to integrate with the Visual Studio build process.
You can simply run as "dev" and "production". Production uses AOT compilation. 

##### Developing in VS'15

Make sure you have the TypeScript 2.0 tools installed for VS'15: [download here.](http://download.microsoft.com/download/6/D/8/6D8381B0-03C1-4BD2-AE65-30FF0A4C62DA/TS2.0.3-TS-release20-nightly-20160921.1/TypeScript_Dev14Full.exe)
After installing the TypeScript 2.0 tools, you can start using Visual Studio to write your TypeScript code.

##### Building and running

Development uses JIT compilation with Hot Module Replacement to make your development process a bit more enjoyable.
To use the development mode, **before starting**, run `npm run devserver:jit` to host the development server.
Now, start IIS Express (Dev) in Visual Studio and enjoy the magic!

### Changing the default namespace

If you want to change the default `Dotnet.Starter` namespace to your own, simply go to any file such as `Program.cs` and highlight the `Dotnet.Starter` text.
Using `ctrl+f` (in VS, or whatever find-replace tool you use) do a replace all on this, and simply fill in the desired name. Rebuild the solution and fix any missing `using` statements.