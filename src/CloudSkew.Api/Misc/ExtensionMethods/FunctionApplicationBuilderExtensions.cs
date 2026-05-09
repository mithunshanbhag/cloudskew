namespace CloudSkew.Api.Misc.ExtensionMethods;

public static class FunctionApplicationBuilderExtensions
{
    extension(FunctionsApplicationBuilder builder)
    {
        public FunctionsApplicationBuilder ConfigureApp()
        {
            builder.ConfigureFunctionsWebApplication();

            return builder;
        }

        public FunctionsApplicationBuilder ConfigureServices()
        {
            // inject the CloudSkew services
            builder.Services
                .AddScoped<ISyncfusionImageService, WebKitImageService>()
                .AddScoped<ISyncfusionImageService, BlinkImageService>();

            return builder;
        }
    }
}