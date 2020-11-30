# frozen_string_literal: true

require 'yaml'
require 'date'

class Course
  FILE_NAME = File.join('data', 'courses.yml')

  attr_reader :course
  def initialize(course)
    @course = course
  end

  def title
    course['title']
  end

  def active
    course['active']
  end

  def description
    course['description']
  end

  def info
    course['info']
  end

  def slug
    course['slug']
  end

  def instructors
    course['instructors']
  end

  def price
    course['price']
  end

  def dates
    if course['dates'].is_a?(Array) && !course['dates'].empty?
      course['dates']
    else
      %w[On\ demand/custom\ dates\ -\ Stockholm\ Gothenburg\ or\ customer's\ location]
    end
  end

  def category
    course['category']
  end

  def self.all
    YAML.load_file(FILE_NAME).map do |course|
      new(course)
    end
  end

  def self.all_active
    all.select(&:active)
  end

  def self.active_categories
      .map(&:category).uniq! {|category| category }
  end
end
