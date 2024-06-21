# frozen_string_literal: true

class SearchPostsReflex < ApplicationReflex
  def search
    posts = Post.where('title LIKE ?', "%#{post_results_params[:query]}%").all
    morph '#posts', render(partial: 'posts/results', locals: { posts: })
  end

  protected

  def post_results_params
    params.require(:search_posts).permit(:query)
  end
end
