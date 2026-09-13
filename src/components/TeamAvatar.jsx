import React from "react";

/**
 * Renders a real photo if `image` is provided, otherwise a circular
 * initials placeholder in the firm's brass-on-ink palette. Size is
 * controlled by the .slp-avatar CSS class (see index.css) so it can
 * scale down responsively on mobile. Swap in photos later just by
 * adding `image: "/team/name.jpg"` in src/data/content.js.
 */
export default function TeamAvatar({ name, initials, image }) {
  if (image) {
    return <img src={image} alt={name} className="slp-avatar" />;
  }
  return (
    <div className="slp-avatar slp-avatar-placeholder" aria-hidden="true">
      {initials}
    </div>
  );
}