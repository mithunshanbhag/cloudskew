param(
    [int]$Port = 7001,
    [string]$HostName = "127.0.0.1"
)

$ErrorActionPreference = "Stop"

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$npx = Get-Command npx -ErrorAction SilentlyContinue

if (-not $npx) {
    throw "npx was not found. Install Node.js/npm or add npx to PATH, then try again."
}

Write-Host "Serving CloudSkew assets from $scriptRoot at http://localhost:$Port"

& $npx.Source --yes http-server $scriptRoot -a $HostName -p $Port --cors -c-1
