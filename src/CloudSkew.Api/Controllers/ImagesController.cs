using FromBodyAttribute = Microsoft.Azure.Functions.Worker.Http.FromBodyAttribute;

namespace CloudSkew.Api.Controllers;

public class ImagesController(ISyncfusionImageService imageService, ILogger<ImagesController> logger)
{
    [Function(nameof(GenerateImage))]
    public IActionResult GenerateImage(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "images")]
#pragma warning disable IDE0060 // Remove unused parameter
        HttpRequest req,
#pragma warning restore IDE0060 // Remove unused parameter
        [FromBody] ImageGenerationRequestDto imageGenerationRequestDto)
    {
        logger.LogInformation("C# HTTP trigger function processed a request.");

        var format = imageGenerationRequestDto.Format.ToLowerInvariant();
        switch (format)
        {
            case "pdf":
                var pdfDocument = imageService.GeneratePdf(imageGenerationRequestDto);
                var pdfDocumentAsDataUrl = pdfDocument.AsDataUrl();
                return new JsonResult(pdfDocumentAsDataUrl);

            case "svg":
                var svgStream = imageService.GenerateSvg(imageGenerationRequestDto);
                var svgAsDataUrl = svgStream.AsDataUrl("image/svg+xml");
                return new JsonResult(svgAsDataUrl);

            default:
                var image = imageService.GenerateImage(imageGenerationRequestDto);
                var imageAsDataUrl = image.AsDataUrl($"image/{format}");
                return new JsonResult(imageAsDataUrl);
        }
    }
}