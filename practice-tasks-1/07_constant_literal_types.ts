const Colors = {
    Primary: "RED",
    Secondary: "BLUE"
} as const;

type ValidColor = typeof Colors[keyof typeof Colors];

function setColor(c: ValidColor) {
    console.log(c);
}