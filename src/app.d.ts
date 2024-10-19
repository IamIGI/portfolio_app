// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace T {
    interface WorkExperience {
      title: string;
      company: string;
      date: WorkDate;
      desc?: string;
      list?: string[];
    }

    interface WorkDate {
      start: string;
      end?: string;
    }
  }
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
