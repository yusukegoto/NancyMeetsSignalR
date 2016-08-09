using Nancy;

namespace NancyMeetsSignalR
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get["/"] = _ => "Hello World";
        }
    }
}
