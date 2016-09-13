# bootstrap DNVM into this session.
&{$Branch='dev';iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))}

# load up the global.json so we can find the DNX version
#$globalJson = Get-Content -Path $PSScriptRoot\global.json -Raw -ErrorAction Ignore | ConvertFrom-Json -ErrorAction Ignore

$path = (get-item $PSScriptRoot).parent.FullName

#Write-Warning $path
#Write-Warning $PSScriptRoot
$globalJson = Get-Content -Path $path\global.json -Raw -ErrorAction Ignore | ConvertFrom-Json -ErrorAction Ignore

if($globalJson)
{
    $dnxVersion = $globalJson.sdk.version
}
else
{
    Write-Warning "Unable to locate global.json to determine using 'latest'"
    $dnxVersion = "latest"
}

# install DNX
# only installs the default (x86, clr) runtime of the framework.
# If you need additional architectures or runtimes you should add additional calls
# ex: & $env:USERPROFILE\.dnx\bin\dnvm install $dnxVersion -r coreclr
& $env:USERPROFILE\.dnx\bin\dnvm install $dnxVersion -Persistent

Write-Warning $path

 # run DNU restore on project.json within this project folder. 'including 2>1 to redirect stderr to stdout for badly behaved tools
$folder = ($path + "\Armls.Helios.Web")

Get-ChildItem -Path $folder -Filter project.json | ForEach-Object { & dnu restore $_.FullName 2>1 }