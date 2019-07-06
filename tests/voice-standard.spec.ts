// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('voice-standard', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Why do you keep switching voices (from one)[voice:"Brian"] to (the other)[voice:"Kendra"]?
  `;

  test('converts to SSML - Amazon Alexa', () => {

    const options = {
      platform: 'amazon-alexa'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Why do you keep switching voices <voice name="Brian">from one</voice> to <voice name="Kendra">the other</voice>?
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Google Assistant', () => {

    const options = {
      platform: 'google-assistant'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Why do you keep switching voices from one to the other?
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Why do you keep switching voices from one to the other?
    `;

    expect(text).toBe(expected);
  });

});

describe('voice-standard lowercase name', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Why do you keep switching voices (from one)[voice:"brian"] to (the other)[voice:"kendra"]?
  `;

  test('converts to SSML - Amazon Alexa', () => {

    const options = {
      platform: 'amazon-alexa'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Why do you keep switching voices <voice name="Brian">from one</voice> to <voice name="Kendra">the other</voice>?
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Google Assistant', () => {

    const options = {
      platform: 'google-assistant'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Why do you keep switching voices from one to the other?
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Why do you keep switching voices from one to the other?
    `;

    expect(text).toBe(expected);
  });

});

describe('voice-standard invalid name', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Why do you keep switching voices (from one)[voice:"brianzzzz"] to (the other)[voice:"kendra"]?
  `;

  test('converts to SSML - Amazon Alexa', () => {

    const options = {
      platform: 'amazon-alexa'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Why do you keep switching voices from one to <voice name="Kendra">the other</voice>?
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Google Assistant', () => {

    const options = {
      platform: 'google-assistant'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Why do you keep switching voices from one to the other?
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Why do you keep switching voices from one to the other?
    `;

    expect(text).toBe(expected);
  });

});

describe('voice-standard device name', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Why do you keep switching voices (from one)[voice:"device"] to (the other)[voice:"kendra"]?
  `;

  test('converts to SSML - Amazon Alexa', () => {

    const options = {
      platform: 'amazon-alexa'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Why do you keep switching voices from one to <voice name="Kendra">the other</voice>?
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Google Assistant', () => {

    const options = {
      platform: 'google-assistant'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Why do you keep switching voices from one to the other?
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Why do you keep switching voices from one to the other?
    `;

    expect(text).toBe(expected);
  });

});
