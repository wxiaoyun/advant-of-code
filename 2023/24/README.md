# [ Day 24: Never Tell Me The Odds ](https://adventofcode.com/2023/day/24)

--- Day 24: Never Tell Me The Odds ---It seems like something is going wrong with the snow-making process. Instead of forming snow, the water that's been absorbed into the air seems to be forminghail!Maybe there's something you can do to break up the hailstones?Due to strong, probably-magical winds, the hailstones are all flying through the air in perfectly linear trajectories. You make a note of each hailstone'spositionandvelocity(your puzzle input). For example:19, 13, 30 @ -2,  1, -2
18, 19, 22 @ -1, -1, -2
20, 25, 34 @ -2, -2, -4
12, 31, 28 @ -1, -2, -1
20, 19, 15 @  1, -5, -3Each line of text corresponds to the position and velocity of a single hailstone. The positions indicate where the hailstones areright now(at time0). The velocities are constant and indicate exactly how far each hailstone will move inone nanosecond.Each line of text uses the formatpx py pz @ vx vy vz. For instance, the hailstone specified by20, 19, 15 @  1, -5, -3has initial X position20, Y position19, Z position15, X velocity1, Y velocity-5, and Z velocity-3. After one nanosecond, the hailstone would be at21, 14, 12.Perhaps you won't have to do anything. How likely are the hailstones to collide with each other and smash into tiny ice crystals?To estimate this, consider only the X and Y axes;ignore the Z axis. Lookingforward in time, how many of the hailstones'pathswill intersect within a test area? (The hailstones themselves don't have to collide, just test for intersections between the paths they will trace.)In this example, look for intersections that happen with an X and Y position each at least7and at most27; in your actual data, you'll need to check a much larger test area. Comparing all pairs of hailstones' future paths produces the following results:Hailstone A: 19, 13, 30 @ -2, 1, -2
Hailstone B: 18, 19, 22 @ -1, -1, -2
Hailstones' paths will crossinsidethe test area (at x=14.333, y=15.333).

Hailstone A: 19, 13, 30 @ -2, 1, -2
Hailstone B: 20, 25, 34 @ -2, -2, -4
Hailstones' paths will crossinsidethe test area (at x=11.667, y=16.667).

Hailstone A: 19, 13, 30 @ -2, 1, -2
Hailstone B: 12, 31, 28 @ -1, -2, -1
Hailstones' paths will cross outside the test area (at x=6.2, y=19.4).

Hailstone A: 19, 13, 30 @ -2, 1, -2
Hailstone B: 20, 19, 15 @ 1, -5, -3
Hailstones' paths crossed in the past for hailstone A.

Hailstone A: 18, 19, 22 @ -1, -1, -2
Hailstone B: 20, 25, 34 @ -2, -2, -4
Hailstones' paths are parallel; they never intersect.

Hailstone A: 18, 19, 22 @ -1, -1, -2
Hailstone B: 12, 31, 28 @ -1, -2, -1
Hailstones' paths will cross outside the test area (at x=-6, y=-5).

Hailstone A: 18, 19, 22 @ -1, -1, -2
Hailstone B: 20, 19, 15 @ 1, -5, -3
Hailstones' paths crossed in the past for both hailstones.

Hailstone A: 20, 25, 34 @ -2, -2, -4
Hailstone B: 12, 31, 28 @ -1, -2, -1
Hailstones' paths will cross outside the test area (at x=-2, y=3).

Hailstone A: 20, 25, 34 @ -2, -2, -4
Hailstone B: 20, 19, 15 @ 1, -5, -3
Hailstones' paths crossed in the past for hailstone B.

Hailstone A: 12, 31, 28 @ -1, -2, -1
Hailstone B: 20, 19, 15 @ 1, -5, -3
Hailstones' paths crossed in the past for both hailstones.So, in this example,2hailstones' future paths cross inside the boundaries of the test area.However, you'll need to search a much larger test area if you want to see if any hailstones might collide. Look for intersections that happen with an X and Y position each at least200000000000000and at most400000000000000. Disregard the Z axis entirely.Considering only the X and Y axes, check all pairs of hailstones' future paths for intersections.How many of these intersections occur within the test area?