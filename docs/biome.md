## Usage

```jsonc
// biome.json
{
  "extends": ["node_modules/temis/configs/biome/biome.json"] // v1.94
  // or "node_modules/temis/configs/biome/v1/biome.json"
}
```

If you find the rules too strict, please override the settings.

## Policy

I have adopted Biome as a faster alternative to [Prettier](https://github.com/prettier/prettier) for code formatting.

I generally follow [Biome's recommended formatting settings](https://biomejs.dev/formatter/#options), but I configure `indentStyle` to use `space`.

`organizeImports` is not used. Instead, sorting is done with ESLint.
