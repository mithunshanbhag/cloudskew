namespace CloudSkew.Api.Misc.ExtensionMethods;

public static class ImageExtensions
{
    extension(Image image)
    {
        public string AsDataUrl(string mediaType)
        {
            var base64EncodedString = image.ImageData.AsBase64String();

            return $"data:{mediaType};base64,{base64EncodedString}";
        }

        public MemoryStream AsMemoryStream()
        {
            var stream = new MemoryStream();

            stream.Write(image.ImageData, 0, image.ImageData.Length);

            return stream;
        }

        public string AsString()
        {
            return image.AsMemoryStream().AsString();
        }
    }
}