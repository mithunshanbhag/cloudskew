namespace CloudSkew.Api.Services.Implementations;

public class WebKitImageService : SyncfusionImageServiceBase
{
    protected override HtmlToPdfConverter GetHtmlToPdfConverter(ImageGenerationRequestDto imageGenerationRequestDto)
    {
        var htmlToPdfConverter = new HtmlToPdfConverter(HtmlRenderingEngine.WebKit)
        {
            ConverterSettings = GetWebKitConverterSettings(imageGenerationRequestDto)
        };

        return htmlToPdfConverter;
    }

    private static WebKitConverterSettings GetWebKitConverterSettings(ImageGenerationRequestDto imageGenerationRequestDto)
    {
        var webkitConverterSettings = new WebKitConverterSettings
        {
            WebKitViewPort = new Size(Convert.ToInt32(imageGenerationRequestDto.Width), Convert.ToInt32(imageGenerationRequestDto.Height)),
            HtmlEncoding = Encoding.UTF8
        };

        // details: https://www.syncfusion.com/forums/167387/htmltopdfconverterconverttoimage-only-creates-images-in-jpeg-format
        if (string.Equals(imageGenerationRequestDto.Format, "PNG", StringComparison.OrdinalIgnoreCase)) webkitConverterSettings.BackgroundColor = Color.Transparent;

        return webkitConverterSettings;
    }
}