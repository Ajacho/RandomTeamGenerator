namespace RandomTeamGenerator.Models{
    public static class Repository{
        private static List<TeamFormation> team = new();

        public static IEnumerable<TeamFormation> Team => team;
        
    }
}