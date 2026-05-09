namespace CloudSkew.Api.Misc.ExtensionMethods;

public static class ByteArrayExtensions
{
    extension(byte[] bytes)
    {
        public string AsString()
        {
            return Encoding.UTF8.GetString(bytes);
        }

        public MemoryStream AsMemoryStream()
        {
            return new MemoryStream(bytes);
        }

        public string AsBase64String()
        {
            return Convert.ToBase64String(bytes);
        }
    }
}