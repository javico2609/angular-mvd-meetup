
export interface Photo {
    id: number;
    highres_link: string;
    photo_link: string;
    thumb_link: string;
    type: string;
    base_url: string;
}

export interface Organizer {
    id: number;
    name: string;
    bio: string;
    photo: Photo;
}

export interface GroupPhoto {
    id: number;
    highres_link: string;
    photo_link: string;
    thumb_link: string;
    type: string;
    base_url: string;
}

export interface KeyPhoto {
    id: number;
    highres_link: string;
    photo_link: string;
    thumb_link: string;
    type: string;
    base_url: string;
}

export interface Category {
    id: number;
    name: string;
    shortname: string;
    sort_name: string;
}

export interface MeetupGroup {
    score: number;
    id: number;
    name: string;
    link: string;
    urlname: string;
    description: string;
    created: number;
    city: string;
    country: string;
    localized_country_name: string;
    state: string;
    join_mode: string;
    visibility: string;
    lat: number;
    lon: number;
    members: number;
    organizer: Organizer;
    who: string;
    group_photo: GroupPhoto;
    key_photo: KeyPhoto;
    timezone: string;
    category: Category;
    hosts: Host[]
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Venue {
    country: string;
    localized_country_name: string;
    city: string;
    address_1: string;
    name: string;
    lon: number;
    id: number;
    lat: number;
    repinned: boolean;
}

export interface Group {
    join_mode: string;
    created: number;
    name: string;
    group_lon: number;
    id: number;
    urlname: string;
    group_lat: number;
    who: string;
}

export interface GroupProfile {
    status: string;
    visited: number;
    created: number;
    updated: number;
    role: string;
    group: Group;
    intro: string;
    link: string;
}

export interface Meetup {
    utc_offset: number;
    venue: Venue;
    rsvp_limit: number;
    headcount: number;
    distance: number;
    visibility: string;
    waitlist_count: number;
    created: number;
    maybe_rsvp_count: number;
    description: string;
    event_url: string;
    yes_rsvp_count: number;
    name: string;
    id: string;
    time: number;
    updated: number;
    group: Group;
    status: string;
}

export interface Host {
    id: number;
    name: string;
    status: string;
    joined: number;
    city: string;
    country: string;
    localized_country_name: string;
    state: string;
    lat: number;
    lon: number;
    photo: Photo;
    group_profile: GroupProfile;
    social: { provider: string, profile: string }[]
}

export interface EventContext {
    host: boolean;
}

export interface Member {
    id: number;
    name: string;
    photo: Photo;
    event_context: EventContext;
}

export interface Comments {
    id: number;
    comment: string;
    link: string;
    created: number;
    like_count: number;
    member: Member;
}
