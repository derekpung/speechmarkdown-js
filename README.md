[![TypeScript version][ts-badge]][typescript-34]
[![Node.js version][nodejs-badge]][nodejs]
[![MIT][license-badge]][LICENSE]

# speechmarkdown-polly-js

This project adds speechmarkdown support for Amazon Polly, built on top of 
[speechmarkdown-js](https://github.com/speechmarkdown/speechmarkdown-js)

Initiated the migration of polly-only features since the project seemed to be dormant in the original git repository. [Pull Request](https://github.com/speechmarkdown/speechmarkdown-js/pull/66)

Includes XML escaping by Garcia Guillaume [Pull Request](https://github.com/speechmarkdown/speechmarkdown-js/pull/59)

## Differences
Some tags from the original speechmarkdown-js library has been disabled due to the nature of how ssml is used in amazon polly.

* Removal of voice tag
    Voice is specified separately in the api call. Hence this solution is only for converting speechmarkdown to ssml, and assumes that the user is sure how the generated ssml will be used with a valid voice id.

[Amazon Polly Neural Voices](https://docs.aws.amazon.com/polly/latest/dg/ntts-voices-main.html)

## MD support

#### Neural Only
* [x] newscaster (section)

#### Standard Only
* [x] emphasis
* [x] pitch
* [x] timbre
* [x] whisper

#### Both Standard and Neural

* [x] address
* [x] break (time)
* [x] break (strength)
* [x] cardinal
* [x] characters / chars
* [x] date
* [x] digits
* [x] drc
* [x] expletive / bleep
* [x] fraction
* [x] ipa
* [x] lang
* [x] lang (section)
* [x] mark
* [x] number
* [x] ordinal
* [x] telephone / phone
* [x] rate
* [x] sub
* [x] time
* [x] unit
* [x] volume / vol

#### Unsupported
* [ ] breath
* [ ] auto-breath
* [ ] x-sampa
* [ ] phonation

---

## Quick start

### SSML - Amazon Polly
Convert Speech Markdown to SSML for Amazon Alexa

```js
const smd = require('speechmarkdown-polly-js');

const markdown = `Sample [3s] speech [250ms] markdown`;
const options = {
    platform: 'amazon-polly'
};

const speech = new smd.SpeechMarkdown();
const ssml = speech.toSSML(markdown, options);
```

The resulting SSML is:

```xml
<speak>
Sample <break time="3s"/> speech <break time="250ms"/> markdown
</speak>
```

### SSML - Amazon Polly Neural
Convert Speech Markdown to SSML for Amazon Alexa

```js
const smd = require('speechmarkdown-polly-js');

const markdown = `Sample [3s] speech [250ms] markdown`;
const options = {
    platform: 'amazon-polly-neural'
};

const speech = new smd.SpeechMarkdown();
const ssml = speech.toSSML(markdown, options);
```

The resulting SSML is:

```xml
<speak>
Sample <break time="3s"/> speech <break time="250ms"/> markdown
</speak>
```

### Plain Text
Convert Speech Markdown to Plain Text

```js
const smd = require('speechmarkdown-polly-js');

const markdown = `Sample [3s] speech [250ms] markdown`;
const options = {};

const speech = new smd.SpeechMarkdown();
const text = speech.toText(markdown, options);
```

The resulting text is:

```text
Sample speech markdown
```

## More

### Options

You can pass `options` into the constructor:
```js
const smd = require('speechmarkdown-polly-js');

const markdown = `Sample [3s] speech [250ms] markdown`;
const options = {
    platform: 'amazon-polly'
};

const speech = new smd.SpeechMarkdown(options);
const ssml = speech.toSSML(markdown);
```


Or in the methods `toSSML` and `toText`:
```js
const smd = require('speechmarkdown-polly-js');

const markdown = `Sample [3s] speech [250ms] markdown`;
const options = {
    platform: 'amazon-polly'
};

const speech = new smd.SpeechMarkdown();
const ssml = speech.toSSML(markdown, options);
```

Available options are:

* `platform` (string) - Determines the formatter to use to render SSML. Valid values are: `amazon-polly` and `amazon-polly-neural`.

* `includeFormatterComment` (boolean) - Adds an XML comment to the SSML output indicating the formatter used. Default is `false`.

* `includeSpeakTag` (boolean) - Determines if the `<speak>` tag will be rendered in the SSML output. Default is `true`.

* `includeParagraphTag` (boolean) - Determines if the `<p>` tag will be rendered in the SSML output. Default is `false`.

## License
Licensed under the MIT. See the [LICENSE](https://github.com/speechmarkdown/speechmarkdown-js/blob/master/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-3.4-blue.svg
[typescript]: https://www.typescriptlang.org/
[typescript-34]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html

[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2010.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v10.x/docs/api/

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/speechmarkdown/speechmarkdown-js/blob/master/LICENSE
