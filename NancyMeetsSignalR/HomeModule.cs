using Nancy;

namespace NancyMeetsSignalR
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get["/"] = parameters => "Hello World";
        }
    }
}
