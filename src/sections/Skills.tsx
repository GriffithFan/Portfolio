import { skillGroups } from '../data/portfolio-data'
import Section from '../components/Section'

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <dl className="border-t border-line">
        {skillGroups.map((group) => (
          <div key={group.title} className="py-6 md:py-7 border-b border-line grid md:grid-cols-12 gap-y-2 md:gap-x-12">
            <dt className="md:col-span-4 font-medium">{group.title}</dt>
            <dd className="md:col-span-8 text-muted leading-relaxed">{group.items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default Skills
