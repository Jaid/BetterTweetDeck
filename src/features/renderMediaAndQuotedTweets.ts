import {modifyMustacheTemplate} from '../helpers/mustacheHelpers';
import {makeBTDModule} from '../types/btdCommonTypes';

export const renderMediaAndQuotedTweets = makeBTDModule(({TD}) => {
  modifyMustacheTemplate(TD, 'status/tweet_single.mustache', (string) => {
    return string
      .replace('{{^hasMedia}}', '')
      .replace('{{/hasMedia}}', '')
      .replace(`{{>status/tweet_media_wrapper}}`, '')
      .replace(
        `<div class="js-card-container"></div>  {{#quotedTweet}}`,
        `<div class="js-card-container"></div> {{>status/tweet_media_wrapper}} {{#quotedTweet}}`
      );
  });

  modifyMustacheTemplate(TD, 'status/tweet_detail.mustache', (string) => {
    return string.replace('{{^hasMedia}}', '').replace('{{/hasMedia}}', '');
  });
});
