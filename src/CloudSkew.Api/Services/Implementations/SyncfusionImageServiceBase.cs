namespace CloudSkew.Api.Services.Implementations;

public abstract class SyncfusionImageServiceBase : ISyncfusionImageService
{
    public PdfDocument GeneratePdf(ImageGenerationRequestDto imageGenerationRequestDto)
    {
        new GenerateImageDtoValidator().ValidateAndThrow(imageGenerationRequestDto);

        var converter = GetHtmlToPdfConverter(imageGenerationRequestDto);

        var outputPdf = converter.Convert(imageGenerationRequestDto.HtmlData, "");

        return outputPdf;
    }

    public Image GenerateImage(ImageGenerationRequestDto imageGenerationRequestDto)
    {
        new GenerateImageDtoValidator().ValidateAndThrow(imageGenerationRequestDto);

        var converter = GetHtmlToPdfConverter(imageGenerationRequestDto);

        var outputImage = converter.ConvertToImage(imageGenerationRequestDto.HtmlData, "");

        return outputImage;
    }

    public MemoryStream GenerateSvg(ImageGenerationRequestDto imageGenerationRequestDto)
    {
        new GenerateImageDtoValidator().ValidateAndThrow(imageGenerationRequestDto);

        var converter = GetHtmlToPdfConverter(imageGenerationRequestDto);

        var htmlFilePath = FileHelper.CreateDataFile(imageGenerationRequestDto.HtmlData);

        var stream = new MemoryStream();

        converter.ConvertToSvg(htmlFilePath, stream);

        FileHelper.DeleteDataFile(htmlFilePath);

        return stream;
    }

    protected abstract HtmlToPdfConverter GetHtmlToPdfConverter(ImageGenerationRequestDto imageGenerationRequestDto);
}