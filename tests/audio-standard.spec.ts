// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('audio-standard', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    !["https://www.speechmarkdown.org/test.mp3"]
    Announcing Speech Markdown.
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>

      Announcing Speech Markdown.
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

      Announcing Speech Markdown.
      </speak>
    `;
    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Announcing Speech Markdown.
    `;

    expect(text).toBe(expected);
  });

});

describe('audio-standard single quote', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    !['https://www.speechmarkdown.org/test.mp3']
    Announcing Speech Markdown.
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>

      Announcing Speech Markdown.
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

      Announcing Speech Markdown.
      </speak>
    `;
    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Announcing Speech Markdown.
    `;

    expect(text).toBe(expected);
  });

});

describe('audio-standard soundbank', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    !['soundbank://soundlibrary/alarms/air_horns/air_horn_01'] Air horn
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const text = speech.toSSML(markdown, options);

    const expected = dedent`
    <speak>
     Air horn
    </speak>
    `;

    expect(text).toBe(expected);
  });

  test('converts to SSML - Amazon Polly (Neural)', () => {

    const options = {
      platform: 'amazon-polly-neural'
    };
    const text = speech.toSSML(markdown, options);

    const expected = dedent`
    <speak>
     Air horn
    </speak>
    `;

    expect(text).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = 'Air horn';

    expect(text).toBe(expected);
  });

});

describe('audio-standard with Amazon signed URL', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    !["https://sample-dev.s3.amazonaws.com/path/18327803923/f7fb4173-4eab-46fc-80ec-020204a615f9.mp3?AWSAccessKeyId=AKXXXXXXXXXXXXXXXXXX&Expires=1596986208&Signature=VL6q9pYc8NTjf6gKVqN0Cem0WTA="]
    Announcing Speech Markdown.
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>

      Announcing Speech Markdown.
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

      Announcing Speech Markdown.
      </speak>
    `;
    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Announcing Speech Markdown.
    `;

    expect(text).toBe(expected);
  });

});

