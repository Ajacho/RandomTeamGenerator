namespace RandomTeamGenerator.Models{
    public class TeamFormation {
        public List<string> Names {get; set;} = new List<string>();
        public int TeamSize {get; set;}
        public List<List<string>> GroupedTeams {get; set;} = new List<List<string>>();
    }
}