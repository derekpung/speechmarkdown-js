// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('ipa-standard', () => {
  const speech = new SpeechMarkdown();

  const markdown = dedent`
    I say, (pecan)[ipa:"'pi.kæn"].
  `;

  test('converts to SSML - Amazon Polly', () => {
    const options = {
      platform: 'amazon-polly',
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      I say, <phoneme alphabet="ipa" ph="'pi.kæn">pecan</phoneme>.
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Amazon Polly (Neural)', () => {
    const options = {
      platform: 'amazon-polly-neural',
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      I say, <phoneme alphabet="ipa" ph="'pi.kæn">pecan</phoneme>.
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {
    const options = {};
    const text = speech.toText(markdown, options);

    const expected = dedent`
      I say, pecan.
    `;

    expect(text).toBe(expected);
  });
});
