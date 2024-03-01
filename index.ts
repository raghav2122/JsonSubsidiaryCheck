const fs = require("fs")

interface Problem {
    probName: string;
    lcLink: string;
    status: boolean;
  }
  
  function loadJSONFile(filePath: string): Problem[] | null {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error(`Error reading file ${filePath}: ${err}`);
      return null;
    }
  }
  
  function findMissingLinks(primaryData: Problem[], subsidiaryData: Problem[]): string[] {
    const primaryMap = new Map(primaryData.map(item => [item.lcLink, item]));
    const missingLinks: string[] = [];
  
    for (const item of subsidiaryData) {
      if (!primaryMap.has(item.lcLink)) {
        missingLinks.push(item.lcLink);
      }
    }
  
    return missingLinks;
  }
  
  function checkSubsidiary(primaryFilePath: string, subsidiaryFilePath: string): void {
    const primaryData = loadJSONFile(primaryFilePath);
    const subsidiaryData = loadJSONFile(subsidiaryFilePath);
  
    if (!primaryData || !subsidiaryData) {
      console.error('Error loading JSON files');
      return;
    }
  
    const missingLinks = findMissingLinks(primaryData, subsidiaryData);
  
    if (missingLinks.length === 0) {
      console.log('The subsidiary JSON is a subset of the primary JSON.');
    } else {
      console.log('The subsidiary JSON is not a subset of the primary JSON. Missing links:');
      console.log(missingLinks);
    }
  }
  
  const primaryFilePath = 'leetcode-problems/striverDSAbegineer.json';
  const subsidiaryFilePath = 'leetcode-problems/striver191Probs.json';
  
  checkSubsidiary(primaryFilePath, subsidiaryFilePath);