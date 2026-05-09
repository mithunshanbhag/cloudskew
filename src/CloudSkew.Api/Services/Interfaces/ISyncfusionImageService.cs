namespace CloudSkew.Api.Services.Interfaces;

public interface ISyncfusionImageService
{
    PdfDocument GeneratePdf(ImageGenerationRequestDto imageGenerationRequestDto);

    Image GenerateImage(ImageGenerationRequestDto imageGenerationRequestDto);

    MemoryStream GenerateSvg(ImageGenerationRequestDto imageGenerationRequestDto);
}