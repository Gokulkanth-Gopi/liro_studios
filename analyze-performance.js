const fs = require('node:fs');

console.log('# PERFORMANCE OPTIMIZATION RESULTS\n');
console.log('Analysis Date: ' + new Date().toISOString());
console.log('\n---\n');

try {
  const mobileBefore = JSON.parse(fs.readFileSync('lighthouse-home-mobile.json', 'utf8'));
  const desktopBefore = JSON.parse(fs.readFileSync('lighthouse-home-desktop.json', 'utf8'));
  const mobileAfter = JSON.parse(fs.readFileSync('lighthouse-final-mobile.json', 'utf8'));
  const desktopAfter = JSON.parse(fs.readFileSync('lighthouse-final-desktop.json', 'utf8'));

  const getMetrics = (data) => ({
    score: Math.round(data.categories.performance.score * 100),
    fcp: data.audits['first-contentful-paint']?.displayValue || 'N/A',
    lcp: data.audits['largest-contentful-paint']?.displayValue || 'N/A',
    tbt: data.audits['total-blocking-time']?.displayValue || 'N/A',
    cls: data.audits['cumulative-layout-shift']?.displayValue || 'N/A',
    si: data.audits['speed-index']?.displayValue || 'N/A',
  });

  const beforeMobile = getMetrics(mobileBefore);
  const beforeDesktop = getMetrics(desktopBefore);
  const afterMobile = getMetrics(mobileAfter);
  const afterDesktop = getMetrics(desktopAfter);

  console.log('## BEFORE vs AFTER COMPARISON\n');
  
  console.log('### Mobile Performance\n');
  console.log('| Metric | Before | After | Change |');
  console.log('|--------|--------|-------|--------|');
  console.log(`| Performance Score | ${beforeMobile.score}/100 | ${afterMobile.score}/100 | ${afterMobile.score > beforeMobile.score ? '+' : ''}${afterMobile.score - beforeMobile.score} |`);
  console.log(`| FCP | ${beforeMobile.fcp} | ${afterMobile.fcp} | - |`);
  console.log(`| LCP | ${beforeMobile.lcp} | ${afterMobile.lcp} | - |`);
  console.log(`| TBT | ${beforeMobile.tbt} | ${afterMobile.tbt} | - |`);
  console.log(`| CLS | ${beforeMobile.cls} | ${afterMobile.cls} | - |`);
  console.log(`| Speed Index | ${beforeMobile.si} | ${afterMobile.si} | - |\n`);

  console.log('### Desktop Performance\n');
  console.log('| Metric | Before | After | Change |');
  console.log('|--------|--------|-------|--------|');
  console.log(`| Performance Score | ${beforeDesktop.score}/100 | ${afterDesktop.score}/100 | ${afterDesktop.score > beforeDesktop.score ? '+' : ''}${afterDesktop.score - beforeDesktop.score} |`);
  console.log(`| FCP | ${beforeDesktop.fcp} | ${afterDesktop.fcp} | - |`);
  console.log(`| LCP | ${beforeDesktop.lcp} | ${afterDesktop.lcp} | - |`);
  console.log(`| TBT | ${beforeDesktop.tbt} | ${afterDesktop.tbt} | - |`);
  console.log(`| CLS | ${beforeDesktop.cls} | ${afterDesktop.cls} | - |`);
  console.log(`| Speed Index | ${beforeDesktop.si} | ${afterDesktop.si} | - |\n`);

  console.log('---\n');
  
  console.log('## KEY IMPROVEMENTS\n');
  console.log(`- Mobile Score: ${beforeMobile.score} → ${afterMobile.score} (${afterMobile.score > beforeMobile.score ? '+' : ''}${afterMobile.score - beforeMobile.score} points)`);
  console.log(`- Desktop Score: ${beforeDesktop.score} → ${afterDesktop.score} (${afterDesktop.score > beforeDesktop.score ? '+' : ''}${afterDesktop.score - beforeDesktop.score} points)`);
  
  const mobileTarget = afterMobile.score >= 80 ? '✓ ACHIEVED' : '✗ NOT MET';
  const desktopTarget = afterDesktop.score >= 90 ? '✓ ACHIEVED' : '✗ NOT MET';
  
  console.log(`\n### Target Achievement\n`);
  console.log(`- Mobile 80+ target: ${mobileTarget}`);
  console.log(`- Desktop 90+ target: ${desktopTarget}`);

} catch (error) {
  console.log('ERROR: Could not analyze results');
  console.log(error.message);
}
