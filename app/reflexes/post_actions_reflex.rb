# frozen_string_literal: true

class PostActionsReflex < ApplicationReflex
  def toogle_complete_at
    post = Post.find(element.dataset.value)
    post.update(completed_at: post.completed_at? ? nil : Time.now)
    posts = Post.all
    morph '#posts', render(partial: 'posts/results', locals: { posts: })
  end
end
