function hideTabs() {
    // 「Videos」タブ、 「Short videos」タブ、そして「All”タブを非表示にする
    document.querySelectorAll('a').forEach(tab => {
      const text = tab.innerText.trim();
      if (
        text.includes("Videos") ||
        text.includes("Short videos") ||
        text.includes("All") ||
        text.includes("Shopping") ||
        text.includes("News") ||  // News タブのテキストを含む
        text.includes("Flights") ||
        text.includes("Finance")
      ) {
        tab.style.display = "none";
      }
    });
  }
  
  function reorderTabs() {
    const tabsContainer = document.querySelector('.hdtb-mn');
    if (tabsContainer) {
      // タブを配列にしてから順番を変更
      const tabs = Array.from(tabsContainer.children);
      
      // ここでタブの順番を変更する
      const webTab = tabs.find(tab => tab.innerText.includes("Web"));
      const videosTab = tabs.find(tab => tab.innerText.includes("Videos"));
      const allTab = tabs.find(tab => tab.innerText.includes("All"));
      
      // タブの順番を変更する
      if (webTab) tabsContainer.prepend(webTab);  // Webタブを先頭に
      if (videosTab) tabsContainer.append(videosTab);  // Videosタブを最後に
      if (allTab) tabsContainer.append(allTab);  // Allタブを最後に
    }
  }
  
  // ページが読み込まれた後に即座にタブを非表示
  window.addEventListener('load', () => {
    hideTabs();
    reorderTabs();
  });
  
  // 動的に追加される要素にも監視して非表示にし、タブ順を変更
  const observer = new MutationObserver(() => {
    hideTabs();
    reorderTabs();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  