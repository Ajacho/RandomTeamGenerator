namespace RandomTeamGenerator.Models{
    public class TeamFormation {
        public string Names {get; set;}
        public int TeamSize {get; set;}
        public List<List<string>> GroupedTeams {get; set;} = new List<List<string>>();
    }
}