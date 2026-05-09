namespace CloudSkew.Api.Exceptions;

public abstract class CloudSkewException : Exception
{
    protected CloudSkewException()
    {
    }

    protected CloudSkewException(string message) : base(message)
    {
    }

    protected CloudSkewException(string message, Exception inner) : base(message, inner)
    {
    }

    public abstract IActionResult ToActionResult();
}