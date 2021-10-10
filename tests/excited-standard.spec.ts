// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('excited-standard', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    We can switch (from excited)[excited] to (really excited)[excited:"high"].
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      We can switch from excited to really excited.
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
      We can switch from excited to really excited.
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      We can switch from excited to really excited.
    `;

    expect(text).toBe(expected);
  });

});

describe('excited-standard non-lowercase intensity', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    We can switch (from excited)[excited] to (really excited)[excited:"HigH"].
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      We can switch from excited to really excited.
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
      We can switch from excited to really excited.
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      We can switch from excited to really excited.
    `;

    expect(text).toBe(expected);
  });

});

describe('excited-standard invalid intensity', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    We can switch (from excited)[excited] to (really excited)[excited:"pizza"].
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      We can switch from excited to really excited.
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
      We can switch from excited to really excited.
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

 test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      We can switch from excited to really excited.
    `;

    expect(text).toBe(expected);
  });

});
