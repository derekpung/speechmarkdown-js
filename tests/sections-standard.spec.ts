// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('sections-standard', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    My voice and language is based on the device.

    #[voice:"Kendra";lang:"en-US"]
    Now I am speaking as Kendra from the US with a US accent.

    #[voice:"Brian";lang:"en-US"]
    Switching to Brian from the UK with a US accent.

    #[voice:"device"]
    Now back to the device setting.
  `;
  
  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
    <speak>
    My voice and language is based on the device.


    <lang xml:lang="en-US">
    Now I am speaking as Kendra from the US with a US accent.

    </lang>

    <lang xml:lang="en-US">
    Switching to Brian from the UK with a US accent.

    </lang>

    Now back to the device setting.
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
    My voice and language is based on the device.


    <lang xml:lang="en-US">
    Now I am speaking as Kendra from the US with a US accent.

    </lang>

    <lang xml:lang="en-US">
    Switching to Brian from the UK with a US accent.

    </lang>

    Now back to the device setting.
    </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      My voice and language is based on the device.


      Now I am speaking as Kendra from the US with a US accent.


      Switching to Brian from the UK with a US accent.


      Now back to the device setting.
    `;

    expect(text).toBe(expected);
  });

});

describe('sections-standard end speak tag at end', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    #[voice:"Kendra"]
    Section 1

    #[voice:"Brian";lang:"en-GB"]
    Section 2
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>

      Section 1


      <lang xml:lang="en-GB">
      Section 2</lang>

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

      Section 1


      <lang xml:lang="en-GB">
      Section 2</lang>

      </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Section 1


      Section 2
    `;
    expect(text).toBe(expected);
  });

});

describe('sections-standard voice section on same line', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    #[voice:'Brian'] Hey there, nice to meet you
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
       Hey there, nice to meet you
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
       Hey there, nice to meet you
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = 'Hey there, nice to meet you';

    expect(text).toBe(expected);
  });

});
