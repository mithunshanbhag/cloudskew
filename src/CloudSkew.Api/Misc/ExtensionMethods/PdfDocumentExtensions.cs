namespace CloudSkew.Api.Misc.ExtensionMethods;

public static class PdfDocumentExtensions
{
    public static string AsDataUrl(this PdfDocument pdfDocument)
    {
        using var stream = new MemoryStream();

        pdfDocument.Save(stream);

        var base64EncodedString = stream.AsByteArray().AsBase64String();

        return $"data:application/pdf;base64,{base64EncodedString}";
    }
}