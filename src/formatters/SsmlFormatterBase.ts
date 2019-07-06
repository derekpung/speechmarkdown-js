import { SpeechOptions } from '../SpeechOptions';
import { FormatterBase } from './FormatterBase';

export abstract class SsmlFormatterBase extends FormatterBase {

  protected constructor(protected options: SpeechOptions) {
    // this.options = options;
    super(options);
  }

  public format(ast: any): string {
    const lines = this.formatFromAst(ast, []);

    // tslint:disable-next-line: no-unnecessary-local-variable
    const ssml = lines.join('');
    return ssml;
  }

  // Adds tagged content
  protected addTag(tag: string, ast: any, newLine: boolean, newLineAfterEnd: boolean, attr: any, lines: string[]): string[] {
    lines.push(this.startTag(tag, attr, newLine));

    this.processAst(ast, lines);

    lines.push(this.endTag(tag, newLine));

    if (newLineAfterEnd) {
      lines.push('\n');
    }

    return lines;
  }

  protected addComment(commentText: string, lines: string[]): string[] {
    lines.push(`<!-- ${commentText} -->\n`);
    return lines;
  }

  // Returns the SSML for a start tag
  protected startTag(tag: string, attr: any, newLine: boolean = false): string {
    let attrStr = '';
    if (attr) {
      attrStr = ' ' + Object.keys(attr).map((k) => {
        return k + '="' + attr[k] + '"';
      }).join(' ');
    }

    return '<' + tag + attrStr + '>' + (newLine ? '\n' : '');
  }

  // Returns the SSML for an end tag
  protected endTag(tag: string, newLine: boolean = false): string {
    return (newLine ? '\n' : '') + '</' + tag + '>';
    // return '</' + tag + '>';
  }

  protected voidTag(tag: string, attr: any): string {
    let attrStr = '';
    if (attr) {
      attrStr = ' ' + Object.keys(attr).map((k) => {
        return k + '="' + attr[k] + '"';
      }).join(' ');
    }
    return '<' + tag + attrStr + '/>';
  }

  protected addTagWithAttrs(lines: string[], text: string, tag: string, attrs: any): string[] {

    if (text) {
      lines.push(this.startTag(tag, attrs));
      lines.push(text);
      lines.push(this.endTag(tag, false));
    }
    else {
      lines.push(this.voidTag(tag, attrs));
    }

    return lines;
  }

  protected abstract formatFromAst(ast: any, lines: string[]): string[];
}
