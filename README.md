# bucket-list
Personal simple bucket list of futile and superficial life experiences

## Credits
This is largely inspired from Neal Agrawal's Life Checklist (and therefore not _exactly_ a bucket list: it is whatever you want it to be: bucket list, life checklist, achievements list...)

Check it out on http://neil.fun

## Screenshot 
![The list](https://lh3.googleusercontent.com/pw/AIL4fc_l3TOTaPb1cODRiuyzJ3WSt-hxESISwS0asIq8wBHq8qvkM7Yxbv2giAhbEevJ4Z6hgrj97nhUBQ64FGgxPl6G2uwIgzul10hZJbbI5J9PVyk_ErC7HXwJ-5XGlqN-sapoixKGROJv9Pm7FZeg9FUcMA=w956-h861-s-no?authuser=0 "The list")
 

## Getting Started

1. **Clone the repository.**
2. **Rename "bucketList.js.sample" to "bucketList.js".** This file will serve as the source for your bucket list items.

## How It Works

The application generates the HTML contents on load, which requires JavaScript. The list items are pulled from the `bucketList.js` file.

### bucketList.js File

This file contains all the items of your bucket list. Each item is represented as an object with two properties: `item` and `status`. The `item` property is a string describing the bucket list item, and the `status` property is an integer that represents the status of that item.

Here's a sample of what the `bucketList.js` file might look like:

```javascript
let bucketList = [
    {"item": "👶 Be born", "status": 2},
    {"item": "🚶 Take first steps", "status": 2},
    {"item": "👄 Say first words", "status": 2},
    {"item": "📚 Learn to read", "status": 2},
    {"item": "🏫 Go to school", "status": 2},
    {"item": "👫 Make friends", "status": 2},
    {"item": "🎓 Get a Masters Degree", "status": 2},
    {"item": "💼 Get a job", "status": 2},
    {"item": "✈️ Fly in a plane", "status": 2},
    {"item": "⛵ Ride a boat", "status": 2},
    {"item": "🚂 Ride in a train", "status": 2},
    {"item": "🏍️ Learn to drive a motorcycle", "status": 0},
    {"item": "🚑 Crash a motorcycle", "status": 0},
    {"item": "🎸 Play an instrument", "status": 0},
    {"item": "🏔️ Climb a mountain", "status": 1},
    {"item": "🏃‍♂️ Run a marathon", "status": 0},
    {"item": "💪Get in shape", "status": 0},
    {"item": "🕳️ Explore a cave", "status": 2},
    {"item": "🪂 Go paragliding", "status": 0},
    {"item": "🚣 Go rafting", "status": 0},
    {"item": "🛶 Go canoeing", "status": 2},
    {"item": "🛩️ Go skydiving", "status": 2},
    {"item": "🌋 See a volcano", "status": 2},
    {"item": "🏞️ Become carbon-neutral", "status": 1, "pct": 22},
    {"item": "🏞️ Become carbon-negative", "status": 0},
    {"item": "🌼 Plant a garden", "status": 2},
    {"item": "🌲 Plant a tree", "status": 2},
    {"item": "🌲 Plant a forest", "status": 1},
    {"item": "🎂 Reach age 20", "status": 2},
    {"item": "🎂 Reach age 30", "status": 2},
    {"item": "🎂 Reach age 40", "status": 1, "progress": 35, "goal": 40},
    {"item": "🎂 Reach age 50", "status": 1, "progress": 35, "goal": 50},
    {"item": "🎂 Reach age 60", "status": 1, "progress": 35, "goal": 60},
    {"item": "🎂 Reach age 70", "status": 1, "progress": 35, "goal": 70},
    {"item": "🎂 Reach age 80", "status": 1, "progress": 35, "goal": 80},
    {"item": "🎂 Reach age 90", "status": 1, "progress": 35, "goal": 90},
    {"item": "🎂 Reach age 100", "status": 1, "progress": 35, "goal": 100},
    {"item": "⚰️ Die", "status": 0},
];
```

### Status

The `status` property can have one of three values:

- `0` = Not done: This is represented with a red emoji cross and a red background.
- `1` = In progress: This is represented with an hourglass emoji and an orange background. For items in progress, you can also add either `progress` and `goal` as integers which will compute a progress percentage, or directly provide percentage as `pct` (from 0 to 100). In both cases, this will display a progress bar inside the item.
- `2` = Done: This is represented with a green check mark emoji and a green background.

This is what the progress bars look like:

![Progress bars](https://lh3.googleusercontent.com/pw/AIL4fc_nXeykJFvZXJOlh6EUytTSyh-41haMxARfa1KQX-YHNtQEM2vtPKPmrcP3f6irFsra_L2gXhjlxy7yLhMz_0roah5LT--RJR4eXu4s_2vjAVKLGhxsdPdBuAvg-b8g2dcRJ0dhMA9JrcTuV54XSK33og=w956-h1630-s-no?authuser=0  "Progress bars")
