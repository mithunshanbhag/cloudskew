namespace CloudSkew.Api.Services.Validators;

public class GenerateImageDtoValidator : AbstractValidator<ImageGenerationRequestDto>
{
    public GenerateImageDtoValidator()
    {
        RuleFor(dto => dto).NotNull();
        RuleFor(dto => dto.Format).NotEmpty();
        RuleFor(dto => dto.Height).NotEmpty().GreaterThan(0);
        RuleFor(dto => dto.Width).NotEmpty().GreaterThan(0);
        RuleFor(dto => dto.HtmlData).NotEmpty();
    }
}