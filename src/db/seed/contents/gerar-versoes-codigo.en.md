Repeat what we did together in Exercise 2 for Exercise 3. Submit the different versions of the generated Python code.

*Exercise 3 — Delivery Truck Route Optimization (Production Engineering)*

A carrier has a list of coordinates `[(x, y), ...]` representing delivery points on a Cartesian map (in km), all starting from the origin (0, 0). The truck consumes 0.35 L/km of diesel and has a maximum tank capacity of 80 L.

Implement: (a) a function that computes the total distance traveled following the original order of the list (go through the points in sequence and return to the origin); (b) a function that applies the "nearest neighbor" algorithm — starting from the origin, always go to the nearest unvisited point — and return the new order and the total distance; (c) compare the fuel consumption of the two routes; (d) check whether the truck needs to refuel during the optimized route, considering it departs with a full tank.