using System.ComponentModel.DataAnnotations;


namespace JokesWebApp.Models
{
    public class Joke
    {
        public int ID { get; set; }
        [Required, Display(Name ="Joke Question")]
        public string JokeQuestion { get; set; }
        [Required, Display(Name = "Joke Answer")]
        public string JokeAnswer { get; set; }
    }
}
