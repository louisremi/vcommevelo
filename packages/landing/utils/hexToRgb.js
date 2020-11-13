export default (themeFn) => {
    return (props) => {
        const rawHexColor = themeFn(props);
        const hexColor = rawHexColor.length === 7
            ? rawHexColor
            : rawHexColor.split('').map((char) => char === '#' ? '#' : `${char}${char}`).join('');

        return hexColor
            .match(/#(\w\w)(\w\w)(\w\w)/)
            .slice(1)
            .map((color) => parseInt(color, 16))
            .join(',');
    }
}