namespace CloudSkew.Api.Misc.Utilities;

public static class FileHelper
{
    public static string CreateDataFile(string data)
    {
        var htmlFilePath = Path.Combine(
            Path.GetTempPath(),
            $"htmlData-{DateTime.UtcNow:yyyy-MM-dd-H-mm-ss-ffff}.html");

        if (!File.Exists(htmlFilePath))
        {
            using var streamWriter = File.CreateText(htmlFilePath);
            streamWriter.Write(data);
        }

        return htmlFilePath;
    }

    public static void DeleteDataFile(string filePath)
    {
        if (File.Exists(filePath)) File.Delete(filePath);
    }
}