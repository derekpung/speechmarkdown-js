// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('options-includeFormatterComment default to false', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Text line
  `;
  
  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Text line
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
      Text line
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
});

describe('options-includeFormatterComment set to false', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Text line
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly',
      includeFormatterComment: false,
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Text line
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Amazon Polly (Neural)', () => {

    const options = {
      platform: 'amazon-polly-neural',
      includeFormatterComment: false,
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Text line
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
});

describe('options-includeFormatterComment set to true', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Text line
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly',
      includeFormatterComment: true,
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <!-- Converted from Speech Markdown to SSML for Amazon Polly -->
      <speak>
      Text line
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Amazon Polly (Neural)', () => {

    const options = {
      platform: 'amazon-polly-neural',
      includeFormatterComment: true,
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <!-- Converted from Speech Markdown to SSML for Amazon Polly (Neural) -->
      <speak>
      Text line
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
});

