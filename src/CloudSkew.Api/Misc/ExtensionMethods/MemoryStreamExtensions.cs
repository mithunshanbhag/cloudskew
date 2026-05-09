namespace CloudSkew.Api.Misc.ExtensionMethods;

public static class MemoryStreamExtensions
{
    extension(MemoryStream memoryStream)
    {
        public string AsString()
        {
            return Encoding.UTF8.GetString(memoryStream.ToArray());
        }

        public byte[] AsByteArray()
        {
            return memoryStream.ToArray();
        }

        public string AsDataUrl(string mediaType)
        {
            var base64EncodedString = Convert.ToBase64String(memoryStream.ToArray());

            return $"data:{mediaType};base64,{base64EncodedString}";
        }
    }
}