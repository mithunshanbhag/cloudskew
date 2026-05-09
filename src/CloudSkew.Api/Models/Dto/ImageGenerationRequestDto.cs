namespace CloudSkew.Api.Models.Dto;

public class ImageGenerationRequestDto
{
    public required string HtmlData { get; set; }
    public double Height { get; set; }
    public double Width { get; set; }
    public required string Format { get; set; }
}