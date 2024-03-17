/*Explore the data*/
select *from people;
select *from batting;
select *from pitching;
select *from teams;

/*
1. Heaviest Hitters
This award goes to the team with the highest average weight of its batters on a given year.
*/
SELECT t.name, AVG(p.weight), b.yearid
    FROM batting b
INNER JOIN people p ON b.playerid = p.playerid
INNER JOIN teams t ON t.id = b.team_id
GROUP BY t.name, b.yearid
ORDER BY 2 DESC LIMIT 1;

/*
2. Shortest Sluggers
This award goes to the team with the smallest average height of its batters on a given year.
*/
SELECT t.name, AVG(p.height), b.yearid
    FROM batting b
INNER JOIN people p ON b.playerid = p.playerid
INNER JOIN teams t ON t.id = b.team_id
GROUP BY t.name, b.yearid
ORDER BY 2 ASC LIMIT 1;

/*
3. This award goes to the team with the largest total salary of all players in a given year.
*/
SELECT t.name, SUM(salary), s.yearid
FROM salaries s 
INNER JOIN teams t ON t.id = s.team_id AND t.yearid = s.yearid 
GROUP BY t.name, s.yearid
ORDER BY SUM(salary) DESC;

/*
4. Most Bang For Their Buck In 2010
This award goes to the team that had the smallest “cost per win” in 2010. 
Cost per win is determined by the total salary of the team divided by the number of wins in a given year.
*/
SELECT 
	ROUND(SUM(salary)/teams.w) as cost_per_win,
	teams.w,
	teams.name,
	salaries.yearid 
FROM salaries
LEFT JOIN teams 
	ON teams.teamid = salaries.teamid 
	AND teams.yearid = salaries.yearid
WHERE teams.yearid = 2010
GROUP BY 
	teams.name, 
	salaries.yearid, 
	teams.w
ORDER BY 
	SUM(salary)/teams.w 
	ASC;

/*
5. Priciest Starter
This award goes to the pitcher who, in a given year, cost the most money per game in which they were the starting pitcher.
Note that many pitchers only started a single game, so to be eligible for this award, you had to start at least 10 games.
*/
 SELECT
 	pl.namefirst,
	pl.namelast, 
	sl.salary/pt.g as cost_per_game, 
	sl.yearid, 
	pt.g
 FROM pitching pt
 INNER JOIN salaries sl ON 
 	sl.playerid = pt.playerid AND
 	sl.yearid = pt.yearid AND
  sl.teamid = pt.teamid 
 INNER JOIN people pl ON sl.playerid = pl.playerid
 WHERE pt.g > 10
 ORDER BY 
	sl.salary/pt.g 
	DESC;

/*

*/