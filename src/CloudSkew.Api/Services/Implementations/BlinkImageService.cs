namespace CloudSkew.Api.Services.Implementations;

public class BlinkImageService : SyncfusionImageServiceBase
{
    protected override HtmlToPdfConverter GetHtmlToPdfConverter(ImageGenerationRequestDto imageGenerationRequestDto)
    {
        var htmlToPdfConverter = new HtmlToPdfConverter(HtmlRenderingEngine.Blink)
        {
            ConverterSettings = GetBlinkConverterSettings(imageGenerationRequestDto)
        };

        return htmlToPdfConverter;
    }

    private static BlinkConverterSettings GetBlinkConverterSettings(ImageGenerationRequestDto imageGenerationRequestDto)
    {
        var blinkConverterSettings = new BlinkConverterSettings
        {
            ViewPortSize = new Size(Convert.ToInt32(imageGenerationRequestDto.Width), Convert.ToInt32(imageGenerationRequestDto.Height)),
            HtmlEncoding = Encoding.UTF8
        };

        // details: https://www.syncfusion.com/forums/167387/htmltopdfconverterconverttoimage-only-creates-images-in-jpeg-format
        //if (string.Equals(imageGenerationRequestDto.Format, "PNG", StringComparison.OrdinalIgnoreCase)) BlinkConverterSettings.BackgroundColor = Color.Transparent;

        return blinkConverterSettings;
    }
}