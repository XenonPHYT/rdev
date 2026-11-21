const DB_NAME = 'rdev-academy-local';
const STORE = 'learner-state';
type State = { bookmarks: string[]; completed: string[]; notes: Record<string,string>; recent: string[]; theme: string; density: string; reducedMotion: boolean };
const defaults: State = { bookmarks: [], completed: [], notes: {}, recent: [], theme: 'sovereign', density: 'comfortable', reducedMotion: false };

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
export async function loadState(): Promise<State> {
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const request = db.transaction(STORE).objectStore(STORE).get('main');
      request.onsuccess = () => resolve({ ...defaults, ...(request.result || {}) });
      request.onerror = () => reject(request.error);
    });
  } catch { return { ...defaults, ...(JSON.parse(localStorage.getItem('rdev-fallback') || '{}')) }; }
}
export async function saveState(state: State) {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const request = db.transaction(STORE, 'readwrite').objectStore(STORE).put(state, 'main');
      request.onsuccess = () => resolve(); request.onerror = () => reject(request.error);
    });
  } catch { localStorage.setItem('rdev-fallback', JSON.stringify(state)); }
}
export type LearnerState = State;
