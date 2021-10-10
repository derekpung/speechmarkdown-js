// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('mark-standard', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Sample [mark:"here"] speech [mark:"to-there"] markdown
  `;
  
  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Sample <mark name="here"/> speech <mark name="to-there"/> markdown
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
      Sample <mark name="here"/> speech <mark name="to-there"/> markdown
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Sample speech markdown
    `;

    expect(text).toBe(expected);
  });

});
