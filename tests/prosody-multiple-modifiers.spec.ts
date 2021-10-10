// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('prosody-multiple-modifiers rate + volume', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Multiple modifiers on same (text)[rate:"fast";volume:"loud"]
  `;
  
  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody rate="fast" volume="loud">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Amazon Polly (Neural)', () => {

    const options = {
      platform: 'amazon-polly-neural'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody rate="fast" volume="loud">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Multiple modifiers on same text
    `;

    expect(text).toBe(expected);
  });

});

describe('prosody-multiple-modifiers rate + pitch', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Multiple modifiers on same (text)[rate:"fast";pitch:"low"]
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody rate="fast" pitch="low">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to SSML - Amazon Polly (Neural)', () => {

    const options = {
      platform: 'amazon-polly-neural'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody rate="fast">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Multiple modifiers on same text
    `;

    expect(text).toBe(expected);
  });

});

describe('prosody-multiple-modifiers volume + pitch', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Multiple modifiers on same (text)[volume:"soft";pitch:"low"]
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody volume="soft" pitch="low">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to SSML - Amazon Polly (Neural)', () => {

    const options = {
      platform: 'amazon-polly-neural'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody volume="soft">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Multiple modifiers on same text
    `;

    expect(text).toBe(expected);
  });

});

describe('prosody-multiple-modifiers volume + pitch + rate', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Multiple modifiers on same (text)[volume:"soft";pitch:"low";rate:"medium"]
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody volume="soft" pitch="low" rate="medium">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to SSML - Amazon Polly (Neural)', () => {

    const options = {
      platform: 'amazon-polly-neural'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody volume="soft" rate="medium">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Multiple modifiers on same text
    `;

    expect(text).toBe(expected);
  });

});

describe('prosody-multiple-modifiers vol + pitch + rate defaults', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Multiple modifiers on same (text)[vol;pitch;rate]
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody volume="medium" pitch="medium" rate="medium">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to SSML - Amazon Polly (Neural)', () => {

    const options = {
      platform: 'amazon-polly-neural'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Multiple modifiers on same <prosody volume="medium" rate="medium">text</prosody>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Multiple modifiers on same text
    `;

    expect(text).toBe(expected);
  });

});
